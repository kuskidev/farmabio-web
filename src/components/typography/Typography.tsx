import { TypographyKind } from '@/types/componentTypes';
import styles from './typography.module.css'
import { Poppins } from 'next/font/google'

type Props = {
    text: string;
    kind?: TypographyKind;
    customClass?: string;
    span?: {
        text: string;
        customClass: string;    
    }
}

const regularPoppins = Poppins({weight: '400', subsets: ['latin']})
// const boldPoppins = Poppins({weight: '600', subsets: ['latin']})

const Typography = (props: Props) => {

    const textStyles = {
        main: `${styles['main-text']} ${props.customClass}`,
        ['headline-1']: `${styles.h1}  ${props.customClass}`,
        ['headline-2']: `${styles.h2} ${regularPoppins.className}  ${props.customClass}`,
        ['headline-3']: `${styles.h3} ${regularPoppins.className}  ${props.customClass}`,
        ['p-regular']: `${styles['g-regular']} ${regularPoppins.className}  ${props.customClass}`,
        ['g-regular']: `${styles['p-regular']}  ${props.customClass}`
    }
    if(props.kind === TypographyKind.MAIN) {
        return(
            <h1 className={textStyles.main}>
                <span className={props.span?.customClass}>
                    {props.span?.text}
                </span>
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