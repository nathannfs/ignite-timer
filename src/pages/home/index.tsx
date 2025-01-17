import { HandPalm, Play } from 'phosphor-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { CountDown } from './components/count-down'
import { NewCycleForm } from './components/new-cycle-form'

import { useContext } from 'react'
import { CyclesContext } from '../../contexts/cycles-context'
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa!'),
  minutesAmount: z
    .number()
    .min(5, { message: 'O ciclo precisa ser de no mínimo 5 minuto.' })
    .max(60, { message: 'O ciclo precisa ser de no máximo 60 minutos.' }),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
