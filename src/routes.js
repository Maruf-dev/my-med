/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// eslint-disable-next-line import/no-cycle
import InSpecialist from "./pages/Presentation/pages/InSpecialist";
// eslint-disable-next-line import/no-cycle
import CategoryServices from "./pages/Presentation/pages/CategoryServices";
// eslint-disable-next-line import/no-cycle
import Reviews from "./pages/Presentation/pages/Reviews";
// eslint-disable-next-line import/no-cycle
import InSale from "./pages/Presentation/pages/InSale";
// eslint-disable-next-line import/no-cycle
import Contact from "./pages/Presentation/pages/Contact";
// eslint-disable-next-line import/no-cycle
import InNews from "./pages/Presentation/pages/InNews";
// eslint-disable-next-line import/no-cycle
import Presentation from "./pages/Presentation/Presentation";

const routes = [
  {
    name: "ГЛАВНОЕ",
    route: "/presentation",
    component: <Presentation />,
  },
  {
    name: "СЕРВИСЫ",
    collapse: [
      {
        name: "ВРАЧИ",
        route: "/pages/landing-pages/specialist",
        component: <InSpecialist />,
      },
      {
        name: "ДИАГНОСТИКА",
        route: "/pages/landing-pages/services",
        component: <CategoryServices />,
      },
    ],
  },
  {
    name: "О НАС",
    collapse: [
      {
        name: "СКИДКИ",
        route: "/pages/landing-pages/sale",
        component: <InSale />,
      },
      {
        name: "НОВОСТИ",
        route: "/pages/landing-pages/news",
        component: <InNews />,
      },
      {
        name: "ОТЗЫВЫ",
        route: "/pages/landing-pages/reviews",
        component: <Reviews />,
      },
    ],
  },
  {
    name: "КОНТАКТ",
    route: "/pages/landing-pages/contact",
    component: <Contact />,
  },
];

export default routes;
