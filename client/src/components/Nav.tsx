import { Flex, Header, Link, View } from '@adobe/react-spectrum'
import { Link as RouterLink } from 'react-router-dom'

const Nav = () => {
  return (
    <Header position={'fixed'} top={0} right={0} left={0}>
      <Flex gap={'size-200'} justifyContent={'center'}>
        <View>
          <Link variant={'secondary'} isQuiet>
            <RouterLink to='/'>Home</RouterLink>
          </Link>
        </View>
        <View>
          <Link variant={'secondary'} isQuiet>
            <RouterLink to='/bears'>Bears</RouterLink>
          </Link>
        </View>
        <View>
          <Link variant={'secondary'} isQuiet>
            <RouterLink to='/reddit'>Reddit</RouterLink>
          </Link>
        </View>
      </Flex>
    </Header>
  )
}
export default Nav
