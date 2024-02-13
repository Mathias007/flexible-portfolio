import express from "express";
import {
    ContactController,
    PersonalController,
    PortfolioController,
    ToolsController,
    SkillsController,
    SocialController,
    TimelineController,
} from "./controllers";

import {
    ContactService,
    PersonalService,
    PortfolioService,
    ToolsService,
    SkillsService,
    SocialService,
    TimelineService,
} from "./services";

const router = express.Router();

const contactService = new ContactService();
const personalService = new PersonalService();
const portfolioService = new PortfolioService();
const toolsService = new ToolsService();
const skillsService = new SkillsService();
const socialService = new SocialService();
const timelineService = new TimelineService();

const contactController = new ContactController(contactService);
const personalController = new PersonalController(personalService);
const portfolioController = new PortfolioController(portfolioService);
const toolsController = new ToolsController(toolsService);
const skillsController = new SkillsController(skillsService);
const socialController = new SocialController(socialService);
const timelineController = new TimelineController(timelineService);

router.get("/contact", contactController.getContactInfoData);
router.get("/personal", personalController.getPersonalData);
router.get("/portfolio", portfolioController.getPortfolioProjectsData);
router.get("/tools", toolsController.getServicesData);
router.get("/skills", skillsController.getSkillsData);
router.get("/social", socialController.getSocialMediata);
router.get("/timeline", timelineController.getTimelineData);

export default router;
