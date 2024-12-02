function NotiCard({ noti }) {
    return (
        <div className='noti-item card'>
            <div className='noti-info'>
                <div className='title'>{noti.title}</div>
                {noti.type === 'new-order' && (
                    <div className='time'>6m30s<span className='alert'>⚠️</span></div>
                )}
                <div className='content'>Chị muốn ăn bánh canh...</div>
            </div>
            {noti.type === 'new-order' && (
                <button className='btn-view button'>Detail</button>
            )}
        </div>
    );
}

export default NotiCard;