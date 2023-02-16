import { ClienteLayout } from '../Layouts'
import { Home,Emprendimiento,Reserva,AgregarEmprendimiento  } from '../Pages/Cliente'

const routesCliente = [
    {
        path:"/",
        layout : ClienteLayout,
        component: Home,
    },

    {
        path:"/emprendimiento",
        layout : ClienteLayout,
        component: Emprendimiento,
    },
    {
        path:"/agregaremprendimiento",
        layout : ClienteLayout,
        component: AgregarEmprendimiento,
    },
    {
        path:"/reserva",
        layout : ClienteLayout,
        component: Reserva,
    },
];

export default routesCliente;   