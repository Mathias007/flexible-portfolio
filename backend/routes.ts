import express from "express";

import {
    ContactController,
    PersonalController,
    PortfolioController,
    ServicesController,
    SkillsController,
    SocialController,
    TimelineController,
} from "./controllers";

const router = express.Router();

const contactActions = new ContactController();
const personalActions = new PersonalController();
const portfolioActions = new PortfolioController();
const servicesActions = new ServicesController();
const skillsActions = new SkillsController();
const socialActions = new SocialController();
const timelineActions = new TimelineController();

router.get("/contact", contactActions.getContactInfoData);
router.get("/personal", personalActions.getPersonalData);
router.get("/portfolio", portfolioActions.getPortfolioProjectsData);
router.get("/services", servicesActions.getServicesData);
router.get("/skills", skillsActions.getSkillsData);
router.get("/social", socialActions.getSocialMediata);
router.get("/timeline", timelineActions.getTimelineData);

export default router;
