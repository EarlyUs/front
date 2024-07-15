import { Route, Routes as Router, useLocation } from 'react-router-dom'
import Layout from './Layout'
import ProgressLayout from './ProgressLayout'
import LandingPage from './Landing'
import FirstStepPage from './Step1'
import SecondStepPage from './Step2'
import LastStepPage from './Step3'
import ResultPage from './Result'
import Progressbar from '../components/Progressbar'
import '../styles/index.css'
import useScrollToTop from '../hooks/useScrollToTop'
import PendingPage from './ResultDetail/Pending'
import MatchingPage from './ResultDetail/Matching'
import ApplyPoolPage from './ResultDetail/ApplyPool'
import WaitingPage from './ResultDetail/Waiting'

const Routes = () => {
    useScrollToTop()

    // `/step/*` 페이지에서 프로그레스바 활용
    const location = useLocation()
    const stepPaths = ['/wing/step/1', '/wing/step/2', '/wing/step/3']
    const currentStepIndex = stepPaths.indexOf(location.pathname) + 1
    const progressPercentage = currentStepIndex * 33.3

    const isInStepPath = stepPaths.some(path =>
        location.pathname.includes(path)
    )

    // Layout을 선택하는 로직
    const layout = isInStepPath ? (
        <ProgressLayout
            progressBar={<Progressbar percentage={progressPercentage} />}
        >
            <Router>
                <Route path="/wing/step/1" element={<FirstStepPage />} />
                <Route path="/wing/step/2" element={<SecondStepPage />} />
                <Route path="/wing/step/3" element={<LastStepPage />} />
            </Router>
        </ProgressLayout>
    ) : (
        <Layout>
            <Router>
                <Route path="/" element={<LandingPage />} />
                <Route path="/wing/result" element={<ResultPage />} />
                <Route path="/wing/detail" element={<MatchingPage />} />
                <Route path="/wing/recommend" element={<PendingPage />} />
                <Route path="/wing/apply" element={<ApplyPoolPage />} />
                <Route path="/wing/apply/done" element={<WaitingPage />} />
            </Router>
        </Layout>
    )

    return <>{layout}</>
}

export default Routes
