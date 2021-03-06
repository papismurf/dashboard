import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import APPCONFIG from 'constants/appConfig';
// import DEMO from 'constants/demoData';
import { toggleOffCanvasMobileNav } from 'actions/settingsActions';
import { USER } from 'constants/uiComponents';
import Button from '@material-ui/core/Button';
import MaterialIcon from 'components/MaterialIcon';

const SubMenu = Menu.SubMenu;

class AppMenu extends React.Component {

  // list for AccordionNav
  rootMenuItemKeys= [ // without submenu
    '/app/dashboard',
    '/app/calendar',
  ]
  rootSubmenuKeys = [
    '/user',
    '/app/analysis/',
    '/app/compare/'

  ];

  state = {
    openKeys: ['/app/dashboard'],
  };

  onOpenChange = (openKeys) => {
    // AccordionNav
    // console.log(openKeys)
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  onMenuItemClick = (item) => {
    // AccordionNav
    const itemKey = item.key;
    if(this.rootMenuItemKeys.indexOf(itemKey) >= 0) {
      this.setState({ openKeys: [itemKey] });
    }

    //
    const { isMobileNav } = this.props;
    if (isMobileNav) {
      this.closeMobileSidenav();
    }
  }

  closeMobileSidenav = () => {
    if (APPCONFIG.AutoCloseMobileNav) {
      const { handleToggleOffCanvasMobileNav } = this.props;
      handleToggleOffCanvasMobileNav(true);
    }
  }

  //
  getSubMenuOrItem = item => {
    if (item.children && item.children.some(child => child.name)) {
      const childrenItems = this.getNavMenuItems(item.children);
      // hide submenu if there's no children items
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu
            title={<Button className="nav-item">{item.name}</Button>}
            key={item.path}
          >
            {childrenItems}
          </SubMenu>
        );
      }
      return null;
    } else {
      return <Menu.Item key={item.path}><Button className="nav-item" href={'#' + item.path}><span>{item.menuName || item.name}</span></Button></Menu.Item>;
    }
  };

  getNavMenuItems = menusData => {
    if (!menusData) {
      return [];
    }
    return menusData
      .filter(item => !item.hideInMenu)
      .map(item => {
        // make dom
        const ItemDom = this.getSubMenuOrItem(item);
        return ItemDom;
      })
      .filter(item => item);
  }


  render() {
    const { collapsedNav, colorOption, location } = this.props;
    // const mode = collapsedNav ? 'vertical' : 'inline';
    const menuTheme = ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0 ? 'light' : 'dark';
    const currentPathname = location.pathname;

    const menuProps = collapsedNav
      ? {}
      : {
          openKeys: this.state.openKeys
        };

    return (
      <Menu
        className="app-menu"
        theme={menuTheme}
        mode="inline"
        inlineCollapsed={collapsedNav}
        {...menuProps}
        onOpenChange={this.onOpenChange}
        onClick={this.onMenuItemClick}
        selectedKeys={[currentPathname]}
      >
        <Menu.Item key="/app/dashboard">
          <Button className="nav-item" href="#/app/dashboard">
            <MaterialIcon icon="dashboard" />
            <span className="nav-text">Dashboard</span>
            <span className="nav-badge nav-badge-icon badge-right ml-1"><MaterialIcon icon="stars" className="m-0 text-warning" /></span>
          </Button>
        </Menu.Item>
        <SubMenu
          key="/app/analysis"
          title={<Button className="nav-item" href="#/app/analysis"><MaterialIcon icon="addchart" /><span className="nav-text">Analysis</span></Button>}
        >

        </SubMenu>
        <SubMenu
          key="/app/compare"
          title={<Button className="nav-item" href="#/app/compare"><MaterialIcon icon="compare" /><span className="nav-text">Compare</span></Button>}
        >

        </SubMenu>
        <SubMenu
          key="/"
          title={<Button className="nav-item"><MaterialIcon icon="credit_card" /><span className="nav-text">Quick Views</span></Button>}
        >

        </SubMenu>
        <SubMenu
          key="/"
          title={<Button className="nav-item"><MaterialIcon icon="card_giftcard" /><span className="nav-text">Stable Coins</span></Button>}
        >

        </SubMenu>
        <SubMenu
          key="/"
          title={<Button className="nav-item"><MaterialIcon icon="edit" /><span className="nav-text">Latest News</span></Button>}
        >

        </SubMenu>
        <SubMenu
          key="/"
          title={<Button className="nav-item"><MaterialIcon icon="notifications_none" /><span className="nav-text">Settings</span></Button>}
        >

        </SubMenu>
        <Menu.Item key="/app/calendar">
          <Button className="nav-item" href="#/app/calendar">
            <MaterialIcon icon="calendar_today" />
            <span className="nav-text">Reminders</span>
          </Button>
        </Menu.Item>
        <Menu.Divider />
        <SubMenu
          key="/user"
          title={<Button className="nav-item"><MaterialIcon icon="person_outline" /><span className="nav-text">Account</span></Button>}
        >
          { this.getNavMenuItems(USER) }
        </SubMenu>
        <Menu.Divider />
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return ({
    collapsedNav: state.settings.collapsedNav,
    colorOption: state.settings.colorOption,
    location: state.routing.location
  })
};

const mapDispatchToProps = dispatch => ({
  handleToggleOffCanvasMobileNav: (isOffCanvasMobileNav) => {
    dispatch( toggleOffCanvasMobileNav(isOffCanvasMobileNav) );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMenu);
