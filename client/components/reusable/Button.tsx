import React, { FunctionComponent, useEffect, useState, useMemo, memo } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import Text, { TextVariant } from './Typography';
import styles from '@styles/Button.module.scss';

export enum TypeButton {
  PRIMARY = 'primary-active',
  PRIMARY_INACTIVE = 'primary-inactive',
  PRIMARY_SUCCESS = 'primary-success',
  PRIMARY_DANGER = 'primary-danger',
  SECONDARY = 'secondary-active',
  SECONDARY_INACTIVE = 'secondary-inactive',
  SECONDARY_SUCCESS = 'secondary-success',
  SECONDARY_DANGER = 'secondary-danger',
}

export enum TypeButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum TypeTextColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface iButton {
  btnType: TypeButton;
  icon?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  disable: boolean;
  loading?: boolean;
  size: TypeButtonSize;
}

const Button: FunctionComponent<iButton> = ({
  btnType,
  icon,
  onClick,
  label,
  disable,
  loading,
  size,
}): JSX.Element => {
  const [variant, setVariant] = useState<TextVariant>(TextVariant.heading6);

  useEffect(() => {
    setVariant(handleTextVariant(size));
  }, [size]);

  const handleTextVariant: (btnSize: TypeButtonSize) => TextVariant = useMemo(
    () =>
      (btnSize: TypeButtonSize): TextVariant => {
        switch (btnSize) {
          case TypeButtonSize.LARGE:
            return TextVariant.heading3;
          case TypeButtonSize.MEDIUM:
            return TextVariant.heading4;
          case TypeButtonSize.SMALL:
            return TextVariant.heading6;
          default:
            return TextVariant.heading4;
        }
      },
    [size],
  );

  return (
    <>
      <button
        className={classnames({
          [styles['btn']]: true,
          [styles[`btn-${btnType}`]]: true,
          [styles[`btn-${size}`]]: true,
          // [styles[`btn-textColor-${TextColor}`]]: true,
        })}
        onClick={onClick}
      >
        {loading ? <FontAwesomeIcon icon={faHourglassHalf} /> : icon && icon}
        <Text variant={variant} style={{ marginLeft: '5px' }}>
          {loading ? 'loading...' : label}
        </Text>
      </button>
    </>
  );
};

Button.defaultProps = {
  btnType: TypeButton.PRIMARY,
  icon: <FontAwesomeIcon icon={faPlus} />,
  onClick: () => console.log('hello'),
  label: 'submit',
  disable: false,
  loading: true,
  size: TypeButtonSize.LARGE,
};

export default memo(Button);
