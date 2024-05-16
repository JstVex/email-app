import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonSplitPane, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Inbox from './pages/Inbox';
import ViewMail from './pages/ViewMail';
import { home, mail, notifications, person, easel } from 'ionicons/icons';

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
import Canvas from './pages/Canvas';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main" when="false">
        <Menu />
        <IonTabs>
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/inbox" />
            </Route>
            <Route path="/inbox" exact={true}>
              <Inbox />
            </Route>
            <Route path="/mail/:id">
              <ViewMail />
            </Route>
            <Route path="/canvas" component={Canvas} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom" color='danger'>
            <IonTabButton tab="inbox" href="/inbox">
              <IonIcon icon={mail} />
            </IonTabButton>
            <IonTabButton tab="canvas" href="/canvas">
              <IonIcon icon={easel} />
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
            </IonTabButton>
            <IonTabButton tab="notifications" href="/notifications">
              <IonIcon icon={notifications} />
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={person} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>

      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
