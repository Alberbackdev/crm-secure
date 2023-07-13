export const Card = ({clientes}) => {
    const data = clientes.map((cliente) => <div className="max-w-sm w-screen lg:max-w-screen-lg lg:flex" key={cliente.id}>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal" >
            <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">{cliente.name} {cliente.lastname}</div>
                <p className="text-gray-700 text-base">{cliente._id}</p>
            </div>
            <div className="flex items-center">
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                </div>
            </div>
        </div>
    </div>)
    console.log(data)
    return (
        <>
            {data}
        </>

    )
}
