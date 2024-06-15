import {Menu} from 'antd'
import { HomeOutlined, SettingOutlined, LogoutOutlined, AreaChartOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons'

function ListMenu() {
  return (
    <Menu className='menu'>
      <Menu.Item key='Accueil' icon=<HomeOutlined/>>
        Home
      </Menu.Item>

      <Menu.Item key='Utilisateurs' icon=<UserOutlined/>>
        Utilisateurs
      </Menu.Item>

      <Menu.Item key='Dashboard' icon=<AppstoreOutlined/>>
        Dashboard
      </Menu.Item>

      <Menu.Item key='Statistiques' icon=<AreaChartOutlined/>>
        Statistiques
      </Menu.Item>

      <Menu.Item key='Paramètres' icon=<SettingOutlined/>>
        Paramètres
      </Menu.Item>

      <Menu.Item key='Deconnexion' icon=<LogoutOutlined/>>
        Deconnexion
      </Menu.Item>
    </Menu>
  )
}

export default ListMenu