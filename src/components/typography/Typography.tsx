import { TypographyKind } from '@/types/componentTypes';
import styles from './typography.module.css'

type Props = {
    text: string;
    kind?: TypographyKind;
}

const textStyles = {
    main: `${styles['main-text']}`,
    ['headline-1']: `${styles.h1}`,
    ['headline-2']: `${styles.h2}`,
    ['headline-3']: `${styles.h3}`,
    ['p-regular']: `${styles['g-regular']}`,
    ['g-regular']: `${styles['p-regular']}`

}
const Typography = (props: Props) => {
    if(props.kind === TypographyKind.MAIN) {
        return(
            <h1 className={textStyles.main}>
                {props.text}
            </h1>
        )
    }

    if(props.kind === TypographyKind.H2) {
        return(
            <h2 className={textStyles['headline-2']}>
                {props.text}
            </h2>
        )
    }

    if(props.kind === TypographyKind.H3) {
        return(
            <h3 className={textStyles['headline-3']}>
                {props.text}
            </h3>
        )
    }

    if(props.kind === TypographyKind.PR) {
        return(
            <p className={textStyles['p-regular']}>
                {props.text}
            </p>
        )
    }

    if(props.kind === TypographyKind.GR) {
        return(
            <p className={textStyles['p-regular']}>
                {props.text}
            </p>
        )
    }

    if(props.kind === TypographyKind.H1) {
        return(
            <h1 className={textStyles['headline-1']}>
                {props.text}
            </h1>
        )
    }

    return(
        <h1 className={textStyles['headline-1']}>
            {props.text}
        </h1>
    )

}

export default Typography;