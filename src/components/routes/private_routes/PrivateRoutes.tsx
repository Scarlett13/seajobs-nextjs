export {};
// import * as React from "react";
// import { Route } from "react-router";

// import { LoginContext } from "../../../contexts/AuthContext";

// interface IProps {
//   exact?: boolean;
//   path: string;
//   component: React.ComponentType<any>;
// }

// export default function PrivateRoute({
//   exact = false,
//   path,
//   component,
// }: IProps) {
//   const { isLoggedIn } = React.useContext(LoginContext);

//   return (
//     <Route
//       exact={exact}
//       path={path}
//       render={(props: any) => {
//         if (isLoggedIn) {
//           return <Route {...props} component={component} />;
//         } else if (!isLoggedIn) {
//           return (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: props.location },
//               }}
//             />
//           );
//         } else {
//           return null;
//         }
//       }}
//     />
//   );
// }
