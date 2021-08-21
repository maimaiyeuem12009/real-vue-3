import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList";
import EventShow from "../views/EventShow";
import EventCreate from "../views/EventCreate";

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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
