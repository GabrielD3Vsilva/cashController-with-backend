function CashItem ({title, value}) {
    return(
        <section className="bg-blue-950 px-4 py-1 rounded-md flex flex-col gap-2 cursor-pointer hover:bg-blue-400 transition-all ease-in-out">
            <h1 className="text-lg font-bold text-white text-center">{title}</h1>

            <h2 className="text-xl font-bold text-white text-center">{value} Reais</h2>
        </section>
    )
}

export default CashItem;