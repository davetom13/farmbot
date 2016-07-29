import { ChangeApiUrl } from "./config_actions";
import { assign } from "lodash";
import { ReduxAction } from "../../interfaces";

interface ConfigReducerState {
  farmbotApiUrl: string;
}

function getApiUrl() {
  let host = `//${location.host || "10.0.0.233"}`;
  return (host["includes"]("//10.0.0.233")) ? "//10.0.0.233:3000" : host;
}

let initialState: ConfigReducerState = {
  farmbotApiUrl: getApiUrl()
};

let reduce = {
  CHANGE_API_URL: function(state: ConfigReducerState,
                           action: ChangeApiUrl): ConfigReducerState {
    let newState = assign<{}, ConfigReducerState>({}, state);
    newState.farmbotApiUrl = action.payload.farmbotApiUrl;
    return newState;
  },
  DEFAULT: function(state: ConfigReducerState,
                    action: ReduxAction): ConfigReducerState {
    return state;
  }
};

export function configReducer(state = initialState,
                              action: ReduxAction): ConfigReducerState {
  let reduceFn = reduce[action.type] || reduce["DEFAULT"];
  let result = reduceFn(state, action);
  return result;
};
