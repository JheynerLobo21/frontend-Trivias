import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Profile from "./Profile";

type Props = {
  component: React.ComponentType<object>;
};

export const AuthenticationGuard = ({ component }: Props) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <Profile/>
      </div>
    ),
  });

  return <Component />;
};