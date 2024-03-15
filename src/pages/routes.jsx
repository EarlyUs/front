import { Route, Routes as Router } from 'react-router-dom';
import Layout from './Layout';
import MainPage from './Main';
import LandingPage from './Landing';
import FirstStepPage from './Step1';
import SecondStepPage from './Step2';
import LastStepPage from './Step3';
import ResultPage from './Result';
import '../styles/index.css';

const Routes = () => {
	return (
		<Layout>
			<Router>
				<Route path="/" element={<LandingPage />} />
				<Route path="/welcome" element={<MainPage />} />
				<Route path="/wing/step/1" element={<FirstStepPage />} />
				<Route path="/wing/step/2" element={<SecondStepPage />} />
				<Route path="/wing/step/3" element={<LastStepPage />} />
				<Route path="/wing/result" element={<ResultPage />} />
			</Router>
		</Layout>
	);
};

export default Routes;
