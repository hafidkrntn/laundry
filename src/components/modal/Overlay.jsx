const ModalOverlay = ({ handleCLoseModal }) => {
	return (
		<div
			className="fixed w-full h-screen bg-black bg-opacity-50"
			onClick={handleCLoseModal}
		/>
	);
};

export default ModalOverlay;