import express from "express";
import cors from "cors";
import * as http from "http";
import {
  Message,
  MessageType,
  ChatMessage,
  Question,
  UserResultInfo
} from "./model";

enum tagMode {
  normal,
  question
}

export class ChatServer {
  public static readonly PORT: number = 8080;
  private app: express.Application;
  private server: http.Server;
  private io: SocketIO.Server;
  private port: string | number;

  private questionList: Question[] = [
    {
      Id: 1,
      question: "Greated mountain peak of the earth",
      optionList: [
        "1. Mount Abu.",
        "2. Mount Everest.",
        "3. Mount Sakerest.",
        "4. Mount Tofu"
      ],
      answer: 2
    },
    {
      Id: 2,
      question: "Longest river of the earth",
      optionList: ["1. Nile.", "2. Ganga.", "3. Yamuna.", "4. Saraswati"],
      answer: 1
    }
  ];
  private currentQuestionIndex = 0;

  private userResultInfo: UserResultInfo = new UserResultInfo();

  private currentMode: tagMode = tagMode.normal;

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.sockets();
    this.listen();
  }

  private createApp(): void {
    this.app = express();
    this.app.use(cors());
  }

  private createServer(): void {
    this.server = http.createServer(this.app);
  }

  private config(): void {
    this.port = process.env.PORT || ChatServer.PORT;
  }

  private sockets(): void {
    this.io = require("socket.io").listen(this.server, { origins: "*:*" });
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log("Running server on port %s", this.port);
    });

    this.io.on("connect", (socket: any) => {
      console.log("Connected client on port %s.", this.port);
      socket.on("message", (msg: Message) => {
        console.log("Current Mode ==> ", this.currentMode);
        msg.type = MessageType.Normal;

        if (msg.from.name.toLowerCase() == "zycos") {
          msg = this.processAdminRequest(msg);
        } else if (this.currentMode == tagMode.question) {
          msg = this.processAnswerRequest(msg);
        }

        console.log("[server](message): %s", JSON.stringify(msg));
        this.io.emit("message", msg);
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
  }

  private processAnswerRequest(msg: ChatMessage): ChatMessage {
    let guess = parseInt(msg.content);

    if (this.currentMode == tagMode.question && !isNaN(guess)) {
      let currentQuestion = this.questionList[this.currentQuestionIndex];

      let userName: string = msg.from.name;
      let questionId: number = currentQuestion.Id;
      let guessAnswer: number = guess;
      let answer: number = currentQuestion.answer;

      this.userResultInfo.add(userName, questionId, guessAnswer, answer);
    }

    return msg;
  }

  private processAdminRequest(msg: ChatMessage): ChatMessage {
    if (msg.from.name.toLowerCase() == "zycos") {
      msg.from.name = "admin";

      if (msg.content) {
        if (msg.content.toLowerCase() == "q") {
          let currentQuestion = this.questionList[this.currentQuestionIndex];
          msg.type = MessageType.Question;
          msg.content = currentQuestion;

          this.currentMode = tagMode.question;
        } else if (msg.content.toLowerCase() == "a") {
          let currentQuestion = this.questionList[this.currentQuestionIndex];
          msg.type = MessageType.Answer;
          msg.content = { answer: currentQuestion.answer };

          ++this.currentQuestionIndex;
          if (this.currentQuestionIndex == this.questionList.length) {
            this.currentQuestionIndex = 0;
          }

          this.currentMode = tagMode.normal;
        } else if (msg.content.toLowerCase() == "r") {
          let currentQuestion = this.questionList[this.currentQuestionIndex];

          msg.content = this.userResultInfo.getResult();
          msg.type = MessageType.Result;
        }
      }
    }

    return msg;
  }

  public getApp(): express.Application {
    return this.app;
  }
}

let app = new ChatServer();
