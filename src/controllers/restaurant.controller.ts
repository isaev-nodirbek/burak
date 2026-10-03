import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("Home page");
    res.render("home");
    // send | json | redirect | end | render
  } catch (err) {
    console.error("Error, goHome", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup page");
    res.render("signup");
  } catch (err) {
    console.error("Error, getSignup", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin page");
    res.render("login");
  } catch (err) {
    console.error("Error, getLogin", err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("Process Login Page");

    //console.log("body:", req.body);
    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input);
    res.send(result);
  } catch (err) {
    console.error("Error, processLogin", err);
    res.send(err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log(" processSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const result = await memberService.processSignup(newMember);
    // TODO: SESSION AUTHENTICATION

    res.send(result);
  } catch (err) {
    console.error("Error, processSignup", err);
    res.send(err);
  }
};

export default restaurantController;
