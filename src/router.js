import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import Login from "./pages/login";
import Buttons from "./pages/ui/buttons";
import Modal from "./pages/ui/modal";
import Loadings from "./pages/ui/loadings";
import Notice from "./pages/ui/notice";
import Messages from "./pages/ui/messages";
import Tab from "./pages/ui/tab";
import Gallery from "./pages/ui/gallery";
import Carousels from "./pages/ui/carousel";
import NoMatch from "./pages/nomatch";
import FormLogin from "./pages/form/login";
import FormRegister from "./pages/form/register";
import BasicTable from "./pages/table/basicTable";
import HighTable from "./pages/table/highTable";
import RichText from "./pages/rich";
import City from "./pages/city";

export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={()=>
              <Admin>
                  <Switch>
                      <Route path="/admin/ui/buttons" component={Buttons} />
                      <Route path="/admin/ui/modals" component={Modal} />
                      <Route path="/admin/ui/loadings" component={Loadings} />
                      <Route path="/admin/ui/notification" component={Notice} />
                      <Route path="/admin/ui/messages" component={Messages} />
                      <Route path="/admin/ui/tabs" component={Tab} />
                      <Route path="/admin/ui/gallery" component={Gallery} />
                      <Route path="/admin/ui/carousel" component={Carousels} />
                      <Route path="/admin/form/login" component={FormLogin} />
                      <Route path="/admin/form/reg" component={FormRegister} />
                      <Route path="/admin/table/basic" component={BasicTable} />
                      <Route path="/admin/table/high" component={HighTable} />
                      <Route path="/admin/rich" component={RichText} />
                      <Route path="/admin/city" component={City} />
                      <Route component={NoMatch} />
                  </Switch>
              </Admin>
          } />
          <Route path="/order/detail" component={Admin} />
        </App>
      </HashRouter>
    );
  }
}
