import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Inbox from './pages/Inbox';
import ViewMail from './pages/ViewMail';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Menu from './components/Menu';
import Starred from './pages/Starred';
import Sent from './pages/Sent';
import Drafts from './pages/Drafts';
import Trash from './pages/Trash';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* This is the Ionic React Router component that wraps the entire app */}
    <IonReactRouter>
      <IonSplitPane contentId="main" when={false}>
        <Menu />
        <IonRouterOutlet id='main'>
          <Route path="/" exact={true}>
            <Redirect to="/inbox" />
          </Route>
          <Route path="/inbox" exact={true}>
            {/* Inbox page to view all emails */}
            <Inbox />
          </Route>
          <Route path="/mail/:id">
            {/* Mail page to view a single email */}
            <ViewMail />
          </Route>
          <Route path="/starred" exact={true}>
            {/* Starred page to view all starred emails */}
            <Starred />
          </Route>
          <Route path="/sent" exact={true}>
            {/* Sent page to view all sent emails */}
            <Sent />
          </Route>
          <Route path="/drafts" exact={true}>
            {/* Drafts page to view all draft emails */}
            <Drafts />
          </Route>
          <Route path="/trash" exact={true}>
            {/* Trash page to view all deleted emails */}
            <Trash />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
