//import * as yup from "yup";
import Meetup from '../models/Meetup';

class MeetupController {
  async store(req, res) {
    // const schema = yup.object().shape({
    //   title: yup.string().required(),
    //   file_id: yup.number().required(),
    //   description: yup.string().required(),
    //   location: yup.string().required(),
    //   date: yup.date().required()
    // });

    const user_id = req.user_id;

    const meetup = await Meetup.create({
      ...req.body,
      user_id,
    });

    return res.json(meetup);
  }
}

export default new MeetupController();
