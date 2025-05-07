import createMachine from 'xstate'

export enum States {
    noneOrder = 'noneOrder',
    createOrder = 'createOrder',
    developeOrder = 'developeOrder',
    makeOrder = 'makeOrder',
    deliveryOrder = 'deliveryOrder',
    error = 'serviceError',
    success = 'success',
}

export enum Events {
    CREATE_ORDER = 'CREATE_ORDER',
    START_ORDER = 'START_ORDER',
    READY_ORDER = 'READY_ORDER',
    DELIVERY_ORDER = 'DELIVERY_ORDER',
    SUBMIT = 'SUBMIT',
}

export enum Actions {
    startOrder = 'startOrder',
    developeOrder = 'developeOrder',
    waitDeliveryOrder = 'waitDeliveryOrder',
    deliveryOrder = 'deliveryOrder',
}

export const formMachineFactory = createMachine({
        id: 'login',
        initial: States.noneOrder,
        states: {
            [States.noneOrder]: {
                on: {
                    [Events.CREATE_ORDER]: { actions: Actions.startOrder, },
                    [Events.START_ORDER]: { target: States.error},
                    [Events.READY_ORDER]: { target: States.error},
                    [Events.DELIVERY_ORDER]: { target: States.error},
                    [Events.SUBMIT]: { target: States.error},
                },
            },
            [States.createOrder]: {
                on: {
                    [Events.START_ORDER]: { actions: Actions.developeOrder, },
                    [Events.CREATE_ORDER]: { target: States.error},
                    [Events.READY_ORDER]: { target: States.error},
                    [Events.DELIVERY_ORDER]: { target: States.error},
                    [Events.SUBMIT]: { target: States.error},
                },
            },
            [States.developeOrder]: {
                on: {
                    [Events.CREATE_ORDER]: { target: States.error},
                    [Events.START_ORDER]: { target: States.error },
                    [Events.READY_ORDER]: { actions: Actions.waitDeliveryOrder, },
                    [Events.DELIVERY_ORDER]: { target: States.error},
                    [Events.SUBMIT]: { target: States.error},
                },
            },
            [States.makeOrder]: {
                on: {
                    [Events.CREATE_ORDER]: { target: States.error},
                    [Events.START_ORDER]: { target: States.error },
                    [Events.READY_ORDER]: { target: States.error},
                    [Events.DELIVERY_ORDER]: { actions: Actions.deliveryOrder,},
                    [Events.SUBMIT]: { target: States.error},
                },
            },
            [States.deliveryOrder]: {
                on: {
                    [Events.START_ORDER]: { target: States.error },
                    [Events.CREATE_ORDER]: { target: States.error},
                    [Events.READY_ORDER]: { target: States.error},
                    [Events.DELIVERY_ORDER]: { target: States.error},
                    [Events.SUBMIT]: { target: States.success },
                },
            },
        },
    })
