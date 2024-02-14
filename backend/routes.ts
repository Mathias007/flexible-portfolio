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

import { ServerPaths } from "./config";

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

router.get(ServerPaths.CONTACT, contactController.getContactInfoData);
router.get(ServerPaths.PERSONAL, personalController.getPersonalData);
router.get(ServerPaths.PORTFOLIO, portfolioController.getPortfolioProjectsData);
router.get(ServerPaths.TOOLS, toolsController.getServicesData);
router.get(ServerPaths.SKILLS, skillsController.getSkillsData);
router.get(ServerPaths.SOCIAL, socialController.getSocialMediata);
router.get(ServerPaths.TIMELINE, timelineController.getTimelineData);

export default router;
