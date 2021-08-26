import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList";
import EventShow from "../views/EventShow";
import EventCreate from "../views/EventCreate";
import ErrorDisplay from "@/views/ErrorDisplay";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "EventShow",
    component: EventShow,
    props: true
  },
  {
    path: "/create",
    name: "EventCreate",
    component: EventCreate
  },
  {
    path: "/error/:error",
    name: "ErrorDisplay",
    component: ErrorDisplay,
    props: true
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
