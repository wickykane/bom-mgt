import * as React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import BOMList from "../BOM/BOMList";
import BOMDetail from "../BOM/BOMDetail";

export default class BomManagement extends React.Component {
  public render(): React.ReactElement {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/bom" component={BOMList} />
            <Route exact path="/bom/:id" component={BOMDetail} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
