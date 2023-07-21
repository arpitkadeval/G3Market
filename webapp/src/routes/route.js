import { lazy } from "react";
const IndexBody = lazy(() => import("../pages/indexBody/IndexBody"));
const Auction = lazy(() => import("../pages/auction/Auction"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const About = lazy(() => import("../pages/about/About"));
const Product2 = lazy(() => import("../pages/product2/Product2"));
const ProductDetails = lazy(() => import("../pages/productDetails/ProductDetails"));
const DashBoard = lazy(() => import("../pages/dashBoard/DashBoard"));
const Profile = lazy(() => import("../pages/profile/Profile"));
const WinningBid = lazy(() => import("../pages/winningBid/WinningBid"));
const Referral = lazy(() => import("../pages/referral/Referral"));
const Favorites = lazy(() => import("../pages/favorites/Favorites"));
const Alerts = lazy(() => import("../pages/alerts/Alerts"));
const MyBids = lazy(() => import("../pages/mybids/Mybids"));
const FAQ = lazy(() => import("../pages/faq/FAQ"));
export const routes = [
    { path: "/home", element: IndexBody},
    { path: "/auction", element: Auction},
    { path: "/contact", element: Contact},
    { path: "/about", element: About},
    { path: "/product2", element: Product2},
    { path: "/product-details", element: ProductDetails},
    { path: "/dashboard", element: DashBoard},
    { path: "/profile", element: Profile},
    { path: "/winning-bid", element: WinningBid},
    { path: "/referral", element: Referral},
    { path: "/favorites", element: Favorites},
    { path: "/alerts", element: Alerts},
    { path: "/mybids", element: MyBids},
    { path: "/faq", element: FAQ},
]