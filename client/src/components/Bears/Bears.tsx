import {
  Button,
  Text,
  Content,
  ButtonGroup,
  Provider,
  defaultTheme,
  Image,
  Flex,
} from '@adobe/react-spectrum'
import AddIcon from '@spectrum-icons/workflow/AddCircle'
import CancelIcon from '@spectrum-icons/workflow/Cancel'
import useStore from '../../store'
import BearSVG from './bear-face.svg'

type Props = {}

const Bears = (props: Props) => {
  const bearCount = useStore((state) => state.bears)
  const increasePop = useStore((state) => state.increasePopulation)
  const resetPop = useStore((state) => state.removeAllBears)

  return (
    <Provider theme={defaultTheme}>
      <ButtonGroup>
        <Button variant={'primary'} onPress={increasePop}>
          <AddIcon />
          <Text>Add bear</Text>
        </Button>
        <Button variant={'negative'} onPress={resetPop}>
          <CancelIcon />
          <Text>Reset bears</Text>
        </Button>
      </ButtonGroup>
      <Content>
        There{' '}
        {bearCount === 1 ? `is ${bearCount} bear` : `are ${bearCount} bears`}{' '}
        around here...
      </Content>
      <Flex wrap width='80%' justifyContent='center'>
        {Array.from({ length: bearCount }, (_, i) => (
          <Image key={`bear_${i}`} src={BearSVG} width={100} alt='a bear' />
        ))}
      </Flex>
    </Provider>
  )
}

export default Bears
