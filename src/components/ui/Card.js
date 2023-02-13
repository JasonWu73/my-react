import './Card.css';

/**
 * 通用组件-卡片。
 *
 * @param {string} className 自定义 class 名称
 * @param {JSX.Element} children 业务组件
 * @returns {JSX.Element} 卡片组件
 */
const Card = ({className, children}) => {
  const classes = 'card ' + className;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
