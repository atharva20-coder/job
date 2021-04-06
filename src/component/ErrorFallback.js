function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div className="error">
      <p className="error__text">Oups... Something went wrong</p>
      <button onClick={resetErrorBoundary} className="error__button button1" to="/">Go Back Home</button>
    </div>
  )
}

export { ErrorFallback }