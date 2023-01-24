import axios, { AxiosResponse } from "axios";
import { IMentor } from "../store/reducers/mentors/types";

export default class MentorService {
  static async getMentors(): Promise<AxiosResponse<IMentor[]>> {
    return axios.get<IMentor[]>("./mentors.json");
  }
}
