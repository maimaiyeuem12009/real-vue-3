import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList";
import EventShow from "../views/event/EventShow";
import EventCreate from "../views/EventCreate";
import ErrorDisplay from "@/views/ErrorDisplay";
import EventRegister from "@/views/event/EventRegister";
import EventEdit from "@/views/event/EventEdit";
import EventLayout from "@/views/event/EventLayout";
import NotFound from "@/views/NotFound";
import NProgress from "nprogress"
import Composition from "@/views/Composition";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1})
  },
  {
    path: "/events/:id",
    name: "EventLayout",
    component: EventLayout,
    props: true,
    children: [
      {
        path: "",
        name: "EventShow",
        component: EventShow,
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      }
    ]
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: to => {
      return { path: '/events/' + to.params.afterEvent}
    },
  },
  {
    path: "/create-event",
    name: "EventCreate",
    component: EventCreate,
  },
  {
    path: "/create",
    redirect: {name: EventCreate}
  },
  {
    path: "/composition",
    name: "Composition",
    component: Composition,
  },
  {
    path: "/error/:error",
    name:  'ErrorDisplay',
    components: ErrorDisplay,
    props: true
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: NotFound
  },
  {
    path: "/404/:resource",
    name: '404Resource',
    component: NotFound,
    props: true
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router;
