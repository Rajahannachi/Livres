import EventSchema from "../models/Event.js";
const validateEvent = (req, res, next) => {
  const { error } = EventSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({
      error: errorMessages,
      message: "Les données soumises sont invalides.",
    });
  }

  next();
};

export default validateEvent;