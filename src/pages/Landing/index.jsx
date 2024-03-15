import * as s from './styles';
import Modal from '../../components/Modal';
import { useState } from 'react';

const LandingPage = () => {
	const [isModalOpen, setModalOpen] = useState(true);

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<s.Container>
				{isModalOpen ? <Modal onClose={handleCloseModal} /> : <></>}
			</s.Container>
		</>
	);
};

export default LandingPage;
