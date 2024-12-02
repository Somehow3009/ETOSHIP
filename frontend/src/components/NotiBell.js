import NotiCard from './Card/NotiCard';
import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { IoIosCloseCircle } from "react-icons/io";

function NotiBell() {

    const notiList = [
        {
            type: 'new-order',
            title: 'Nguyen Van A',
            content: 'Chị muốn ăn bánh canh...',
            timeOut: '6m30s'
        },
        {
            type: 'noti',
            title: 'Cảnh báo',
            content: 'Bạn đã bị trừ 2 điểm uy tín'
        },
        {
            type: 'noti',
            title: 'Cảnh báo',
            content: 'Bạn đã bị trừ 2 điểm uy tín'
        },
        {
            type: 'noti',
            title: 'Cảnh báo',
            content: 'Bạn đã bị trừ 2 điểm uy tín'
        },
        {
            type: 'noti',
            title: 'Cảnh báo',
            content: 'Bạn đã bị trừ 2 điểm uy tín'
        },
        {
            type: 'noti',
            title: 'Cảnh báo',
            content: 'Bạn đã bị trừ 2 điểm uy tín'
        },
        {
            type: 'noti',
            title: 'Cảnh báo',
            content: 'Bạn đã bị trừ 2 điểm uy tín'
        }
    ];

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className='noti-bell' onClick={togglePopup}>
                <FaBell />
            </button>

            {isOpen && (
                <div className='popup'>
                    <h2>Notification</h2>
                    <button className='close-btn' onClick={togglePopup}>
                        <IoIosCloseCircle />
                    </button>
                    <div className='noti-list'>
                        {notiList.map((noti, index) => (
                            <NotiCard key={index} noti={noti} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default NotiBell;