function InfoCard(props) {
  return (
    <div className='order-detail-info card'>
      {
        props.icon ? (
          <div className='inline-info'>
            <props.icon/>
            <div className='title'>{props.title}</div>
            <div className='content'>{props.content}</div>
          </div>
        ) : (
          <>
            <div className='title'>{props.title}</div>
            <div className='content'>{props.content}</div>
          </>
        )
      }
    </div>
  );
}

export default InfoCard;