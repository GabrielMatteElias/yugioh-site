import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    heigth: 'auto',
    boxShadow: 24,
};

export default function BasicModal(props) {
    const {
        botao,
        conteudo,
        classe
    } = props

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} sx={{ cursor: 'zoom-in' }}>
                <img src={botao} alt='Card' className={classe} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style}>
                    <img src={conteudo} width={500} alt='Cards' />
                </Box>
            </Modal>
        </div>
    );
}
