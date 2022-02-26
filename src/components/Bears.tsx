import {
  Button,
  Text,
  Content,
  ButtonGroup,
  Provider,
  defaultTheme,
} from '@adobe/react-spectrum'
import AddIcon from '@spectrum-icons/workflow/AddCircle'
import CancelIcon from '@spectrum-icons/workflow/Cancel'
import create from 'zustand'

const useStore = create((set: any) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

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
    </Provider>
  )
}

export default Bears
