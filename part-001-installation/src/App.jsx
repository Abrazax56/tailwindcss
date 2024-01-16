function Tag ({children}) {
  return (
    <h1 className="px-4 pt-1 text-1xl shadow bg-teal-950 rounded-3xl text-teal-300 font-semibold font-mono selection:text-white selection:bg-sky-400">{children}</h1>
  )
}
function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-900 justify-center items-center">
      <div className="p-5 flex flex-wrap gap-3 max-w-xs rounded border-2 border-slate-800 bg-gradient-to-br from-gray-900 to-slate-900">
        <Tag>#fyp</Tag>
        <Tag>#viral</Tag>
        <Tag>#reactjs</Tag>
        <Tag>#helloworld</Tag>
      </div>
    </div>
  )
}

export default App
