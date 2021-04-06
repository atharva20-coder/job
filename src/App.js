import React from 'react';
import { useTheme } from './utils/useTheme';
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './component/ErrorFallback'
import Header from './component/Header';
import Index from './pages/index/';
import Job from './pages/job/';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
          retry: 3,
          staleTime: 60 * 1000
        },
    },
});

function App() {
    const { theme, changeTheme } = useTheme()

    return (
        <div className={`app theme-${theme}`}>
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {window.location.reload()}}
                >
                   <Router>
                        <Header theme={theme} changeTheme={changeTheme} />
                        <Switch>
                            <Route exact path="/">
                                <Index />
                            </Route>
                            <Route path="/:jobId">
                                <Job />
                            </Route>
                        </Switch>
                    </Router>
                </ErrorBoundary>
            </QueryClientProvider>
        </div>
    )
}

export default App;