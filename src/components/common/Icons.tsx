interface IconProps {
    iconName?: string;
    className?: string;
    activeClass?: string;
    strokeClass?: string;
    fillActive?: string;
}

const Icon: React.FC<IconProps> = (props) => {
    const IconList: { [key: string]: JSX.Element } = {
        ainIcon: (
            <svg width="200" height="29" viewBox="0 0 200 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_900_825)">
                    <path d="M98.1415 14.82L97.3519 15.9955C96.1556 15.1441 94.7223 14.6895 93.254 14.6955C89.9178 14.7362 86.5943 17.0466 86.4749 21.0735C86.5232 24.5899 89.344 27.3701 93.254 27.4514C94.7223 27.4574 96.1556 27.0028 97.3519 26.1514L98.1415 27.3219C96.7112 28.3289 95.0033 28.8665 93.254 28.8605C88.3309 28.8554 85.0557 25.3262 85.0557 21.0735C85.0557 16.8207 88.3309 13.2788 93.254 13.2788C95.0037 13.2725 96.7119 13.8111 98.1415 14.82Z" fill="#96A3BC" />
                    <path d="M108.752 13.6241L114.17 28.4949H112.677L111.207 24.4554H104.565L103.082 28.4949H101.589L107.018 13.6241H108.752ZM105.075 23.0539H110.699L107.886 15.343L105.075 23.0539Z" fill="#96A3BC" />
                    <path d="M119.664 13.6241L125.25 21.7311L130.836 13.6241H132.613V28.4949H131.209V15.5461L125.248 24.2091L119.281 15.5461V28.4949H117.874V13.6241H119.664Z" fill="#96A3BC" />
                    <path d="M141.545 13.6241C144.673 13.6241 147.222 15.9092 147.222 19.0398C147.222 22.1703 144.683 24.4554 141.545 24.4554H138.387V28.4949H136.98V13.6241H141.545ZM138.387 23.0488H141.545C143.909 23.0488 145.818 21.4086 145.818 19.0398C145.818 16.6709 143.909 15.0307 141.545 15.0307H138.387V23.0488Z" fill="#96A3BC" />
                    <path d="M155.969 13.6241L161.387 28.4949H159.894L158.432 24.4554H151.782L150.307 28.4949H148.817L154.235 13.6241H155.969ZM152.293 23.0539H157.924L155.103 15.343L152.293 23.0539Z" fill="#96A3BC" />
                    <path d="M166.498 13.6241V28.4949H165.092V13.6241H166.498Z" fill="#96A3BC" />
                    <path d="M183.905 15.2922L182.991 16.3408C181.715 15.2441 180.081 14.6533 178.398 14.6803C174.516 14.6803 171.614 17.1635 171.614 21.0608C171.614 24.5722 174.623 27.4438 178.398 27.4438C179.691 27.4438 181.605 27.0629 182.633 26.1387L182.588 21.4442H179.442V19.9741H183.987L184.05 26.6973C182.915 27.9312 180.922 28.863 178.398 28.863C173.899 28.863 170.203 25.3872 170.203 21.0684C170.203 16.808 173.465 13.2763 178.391 13.2763C180.415 13.2434 182.38 13.9616 183.905 15.2922Z" fill="#96A3BC" />
                    <path d="M189.192 13.6241L198.586 26.121V13.6241H199.992V28.4949H198.573L189.179 15.9448V28.4949H187.772V13.6241H189.192Z" fill="#96A3BC" />
                    <path d="M14.7895 7.03293L15.9955 4.95097L20.3117 12.4003L20.3651 12.4917L21.4365 14.3553L22.4927 12.507L24.8997 8.28718L26.517 9.49319L26.6084 4.06233L24.3741 5.17947L24.8514 5.47653L23.1046 8.12468L22.8761 8.10691L21.4264 10.6459L20.4996 9.05395L16.3205 1.87881L15.9371 1.22375L15.9193 1.26946L14.0481 4.57012C14.4543 5.37498 14.7895 6.01734 14.7895 6.01734V7.03293Z" fill="#A1AECE" />
                    <path d="M42.3297 26.4764L42.1952 26.6643L36.8303 17.6027C36.8303 17.6027 33.1539 11.2553 30.6657 6.93902L30.2925 6.29412L23.7724 17.5976C23.7724 17.6129 23.7521 17.6281 23.7444 17.6459L23.1656 18.6615L21.4873 21.5813L21.2588 21.1903L17.1177 14.1218L16.7013 13.4566L12.281 21.17L12.2505 21.2182L8.83306 27.1822L3.24732 27.2026L10.4098 14.6981C10.4181 14.6807 10.4274 14.6637 10.4377 14.6473L16.3814 4.26802V3.2245C16.3814 3.2245 16.0437 2.58468 15.6375 1.77728L8.8356 13.7308L8.80767 13.779L0.655029 27.9287H10.5215L13.8526 22.1373C13.8629 22.1209 13.8722 22.104 13.8805 22.0865L16.742 17.0898L19.6643 22.1145L21.1039 24.6534L21.4873 25.3263L25.344 18.5726C25.3543 18.5562 25.3636 18.5393 25.3719 18.5218L30.262 9.97817L35.2384 18.5345L40.1386 26.9588L42.5405 26.7227L42.3297 26.4764Z" fill="#A1AECE" />
                    <path d="M53.9938 13.6038L59.4119 28.4847H56.1976L55.0347 25.2907H49.7334L48.5705 28.4847H45.3536L50.7794 13.6038H53.9938ZM50.8404 22.2541H53.9277L52.3841 18.0267L50.8404 22.2541Z" fill="#3B5998" />
                    <path d="M65.1932 13.6038V28.4847H62.1465V13.6038H65.1932Z" fill="#3B5998" />
                    <path d="M43.452 27.8322V27.8703L43.3276 28.4949C39.4938 28.4949 34.718 28.4187 33.3977 28.3959L29.4877 22.0155L28.043 24.5392L27.487 25.5091L29.6654 25.5751L30.1529 25.7274L24.1457 28.0938L23.7344 27.9059L25.9687 24.4884C26.6517 23.2799 28.7463 19.6314 29.4166 18.4685C29.4318 18.4939 29.4471 18.5193 29.4648 18.5447L29.7441 18.9941L31.6331 22.0408C32.6487 23.6912 33.6389 25.3542 34.6037 27.0299L40.6211 27.0096L40.55 26.8852L42.5202 26.6491L43.2185 27.4616L43.452 27.8322Z" fill="#A1AECE" />
                    <path d="M43.4495 27.8297H43.4164C39.5902 27.8297 34.8931 27.751 33.5754 27.7307L29.5486 20.9897L27.5479 24.4833L27.5834 24.5011L29.6679 25.5802L29.5536 25.6233L23.7343 27.9084L24.1634 23.2392L24.2904 21.8936L26.0372 23.4652C26.7176 22.2541 27.3473 21.1395 27.4641 20.9262C27.6723 20.5682 28.8148 18.6005 29.4953 17.4351C29.513 17.4605 29.5283 17.4884 29.546 17.5164L29.8253 17.9632C30.6479 19.2835 31.5036 20.6647 31.7169 21.01C32.7324 22.6603 33.7226 24.3234 34.6875 25.9991L40.2097 25.9813L35.2283 17.4224L30.2519 8.86863L25.3618 17.4047C25.3535 17.4229 25.3442 17.4407 25.3339 17.458L21.5 24.1736L21.4772 24.2117L21.0938 23.5363L19.6542 20.9973L16.7318 15.9955L13.8704 20.977C13.8626 20.9947 13.8533 21.0117 13.8425 21.0278L9.87407 27.9287L0.104098 27.9439H0L0.363073 27.3117L7.19545 15.3202L7.22338 15.2719L15.8965 0.0330067L15.9168 0L16.2977 0.652516L20.4768 7.82765L21.4035 9.42213L23.0463 6.55309L20.8627 5.62637L26.6745 2.83349L26.5297 8.85086L24.6585 7.45189L22.4725 11.2832L21.4162 13.1316L20.3473 11.268L20.294 11.1715L15.96 3.72721L8.82039 16.1885L8.795 16.2393L3.23211 26.093L8.81785 26.0753L12.2429 20.1112C12.2519 20.0944 12.2621 20.0783 12.2734 20.063L16.6887 12.3496L17.1051 13.0249L21.2487 20.0833L21.4772 20.4768L23.1554 17.5443L23.7343 16.5287L23.7648 16.5033L30.2823 5.20236C30.4017 5.41055 30.5362 5.62637 30.6556 5.84726L36.8151 16.5033L43.1981 27.4209L43.4215 27.8068L43.4495 27.8297Z" fill="#3B5998" />
                    <path d="M81.5035 13.6038V28.4822H78.7919L71.9418 19.4663V28.6117H68.9052V13.6038H71.6193L78.4695 22.6223V13.6038H81.5035Z" fill="#3B5998" />
                </g>
                <defs>
                    <clipPath id="clip0_900_825">
                        <rect width="200" height="28.8554" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        dashIcon: (
            <svg className={props.activeClass} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_900_849)">
                    <path d="M15.8333 4.16667V5.83333H12.5V4.16667H15.8333ZM7.5 4.16667V9.16667H4.16667V4.16667H7.5ZM15.8333 10.8333V15.8333H12.5V10.8333H15.8333ZM7.5 14.1667V15.8333H4.16667V14.1667H7.5ZM17.5 2.5H10.8333V7.5H17.5V2.5ZM9.16667 2.5H2.5V10.8333H9.16667V2.5ZM17.5 9.16667H10.8333V17.5H17.5V9.16667ZM9.16667 12.5H2.5V17.5H9.16667V12.5Z" />
                </g>
                <defs>
                    <clipPath id="clip0_900_849">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        analyticsIcon: (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.5" cy="8.5" r="8" className={props.strokeClass} />
                <mask id="mask0_900_875" maskUnits="userSpaceOnUse" x="2" y="3" width="12" height="10">
                    <path d="M3.11279 9.3382L5.02829 9.81707V12.2114H3.11279V9.3382ZM6.94378 8.85932L8.85927 7.90158V12.2114H6.94378V8.85932ZM10.7748 6.94383L12.6903 5.98608V12.2114H10.7748V6.94383Z" fill="white" />
                    <path d="M3.11279 7.42255L5.02829 7.90142L12.6903 4.07043H10.2959" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </mask>
                <g mask="url(#mask0_900_875)">
                    <path d="M2.87329 2.87317H14.3662V14.3661H2.87329V2.87317Z" className={props.fillActive} />
                </g>
            </svg>
        ),
        teamIcon: (
            <svg className={props.activeClass} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.3215" cy="3.9659" r="1.68856" />
                <circle cx="2.97579" cy="3.57333" r="1.68856" />
                <circle cx="8.08016" cy="1.68856" r="1.68856" />
                <path d="M0.0693836 6.08678C0.195044 5.14433 1.06419 4.98725 1.48306 5.02652C2.0328 5.89043 2.58369 5.92473 3.13238 5.89044C3.76068 5.85117 4.27118 5.34068 4.42825 5.1836C4.58533 5.02653 4.70313 4.94799 5.2529 5.1836C5.69271 5.37209 5.8812 6.09987 5.92047 6.4402L5.8812 8.95341C5.84193 9.01886 5.66915 9.18902 5.29217 9.3461C4.82094 9.54244 2.70042 9.54244 1.32601 9.50317C0.226486 9.47176 0.0301238 9.07122 0.0693836 8.87487C0.0170251 8.3382 -0.0562768 7.02923 0.0693836 6.08678Z" />
                <path d="M9.44621 6.5631C9.57187 5.62065 10.441 5.46357 10.8599 5.50284C11.4096 6.36675 11.9605 6.40105 12.5092 6.36676C13.1375 6.32749 13.648 5.81699 13.8051 5.65992C13.9622 5.50284 14.08 5.42431 14.6297 5.65992C15.0695 5.84841 15.258 6.57619 15.2973 6.91652L15.258 9.42973C15.2188 9.49518 15.046 9.66534 14.669 9.82242C14.1978 10.0188 12.0773 10.0188 10.7028 9.97949C9.60332 9.94808 9.40695 9.54753 9.44621 9.35119C9.39386 8.81452 9.32055 7.50555 9.44621 6.5631Z" />
                <path d="M6.4306 5.85112C6.4306 4.90866 5.64523 4.59451 5.25254 4.55524C5.21327 4.12328 5.37034 3.80914 5.44888 3.69133C5.72378 3.33793 6.27353 3.12848 6.58768 3.14157C6.58768 3.18084 6.65836 3.33006 6.9411 3.6128C7.49086 4.04475 7.72649 4.00549 8.1977 4.00549C8.90455 4.00549 9.06163 3.80916 9.3365 3.57352C9.61776 3.33241 9.68992 3.18083 10.0041 3.25937C9.80772 4.20183 10.0433 4.63378 10.3968 5.14428C9.20298 5.14428 8.90454 5.92965 8.90454 6.32234V7.77529H6.4306V5.85112Z" />
            </svg>
        ),
        settingIcon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84059 0C8.61395 0 9.38732 0 10.1607 0C10.4239 0.0922761 10.5561 0.286496 10.6076 0.553657C10.6484 0.765892 10.7003 0.97637 10.7609 1.18377C10.7767 1.23826 10.8352 1.30768 10.8866 1.32087C11.6692 1.51728 12.4039 1.82575 13.0977 2.23704C13.1443 2.26472 13.2339 2.26121 13.2831 2.2344C13.4888 2.12367 13.6856 1.99624 13.8878 1.87892C14.1839 1.70711 14.4045 1.73347 14.6479 1.97471C15.1093 2.43214 15.5685 2.89176 16.0264 3.3527C16.2689 3.59701 16.2957 3.81628 16.1239 4.11244C16.0066 4.31457 15.8792 4.51143 15.7684 4.71707C15.7416 4.76672 15.7372 4.85592 15.7645 4.90206C16.1758 5.59589 16.4842 6.33058 16.6811 7.11317C16.6938 7.16458 16.7624 7.2239 16.8164 7.23972C17.0238 7.30036 17.2343 7.35265 17.4461 7.39352C17.7133 7.44493 17.9088 7.57543 18.0006 7.83952C18.0006 8.61288 18.0006 9.38624 18.0006 10.1596C17.9097 10.4145 17.7251 10.5489 17.4628 10.5999C17.2448 10.6421 17.0291 10.6966 16.8164 10.7594C16.7624 10.7752 16.6938 10.8345 16.6811 10.8864C16.4842 11.669 16.1758 12.4037 15.7645 13.0971C15.7372 13.1432 15.7416 13.2328 15.7684 13.2821C15.8822 13.4925 16.0136 13.6942 16.1323 13.9021C16.2927 14.1828 16.2663 14.403 16.0387 14.6337C15.5738 15.1038 15.1062 15.5718 14.6356 16.0367C14.4063 16.2635 14.183 16.2889 13.9031 16.129C13.7001 16.013 13.5046 15.8834 13.2976 15.7753C13.2401 15.7449 13.1372 15.741 13.0832 15.7726C12.3977 16.1743 11.6749 16.4796 10.9037 16.6747C10.8444 16.6897 10.7776 16.7701 10.7583 16.8334C10.6963 17.0342 10.6475 17.2394 10.6076 17.4459C10.5561 17.7131 10.4239 17.9068 10.1607 17.9996C9.38732 17.9996 8.61395 17.9996 7.84059 17.9996C7.57826 17.9051 7.44644 17.7109 7.39547 17.4433C7.35636 17.2367 7.30671 17.0311 7.24431 16.8303C7.22498 16.7675 7.15775 16.6958 7.09623 16.6743C6.88751 16.5996 6.66737 16.5565 6.45909 16.4814C6.17611 16.3795 5.89972 16.2591 5.6119 16.1431C5.64135 16.1035 5.65013 16.0877 5.662 16.0754C6.44063 15.2963 7.21795 14.5164 8.00142 13.7426C8.04887 13.6955 8.14906 13.6692 8.21717 13.6802C8.69041 13.7571 9.16146 13.7408 9.63427 13.6788C10.8031 13.5259 11.7909 13.0215 12.5621 12.1317C13.5213 11.0244 13.8987 9.72854 13.6764 8.28113C13.4321 6.69222 12.5818 5.50493 11.1515 4.77815C9.70896 4.04521 8.23475 4.06323 6.79963 4.80803C5.58027 5.44078 4.7924 6.44571 4.42506 7.7758C4.24402 8.43096 4.23391 9.09315 4.33014 9.76018C4.34684 9.87531 4.3174 9.95484 4.23391 10.0379C3.49087 10.7774 2.75222 11.5222 2.01225 12.2653C1.97183 12.3061 1.92877 12.3444 1.87868 12.3918C1.85099 12.3386 1.82463 12.2995 1.80925 12.2565C1.65238 11.8228 1.48936 11.3908 1.34743 10.9523C1.30568 10.8236 1.2534 10.7581 1.12113 10.7344C0.937022 10.7014 0.757739 10.6438 0.574066 10.6096C0.302511 10.5586 0.0986234 10.4294 0.00195312 10.1596C0.00195312 9.38624 0.00195312 8.61288 0.00195312 7.83952C0.0986234 7.57016 0.30207 7.44141 0.573186 7.38956C0.779709 7.35002 0.984477 7.29948 1.18617 7.24016C1.24065 7.2239 1.31052 7.1659 1.32326 7.11493C1.51968 6.33234 1.82814 5.59765 2.23943 4.90382C2.26711 4.85724 2.2636 4.7676 2.23723 4.71839C2.1265 4.51274 1.99951 4.31589 1.88175 4.11376C1.70994 3.81848 1.73631 3.59657 1.97754 3.35358C2.43497 2.8922 2.89459 2.43302 3.35553 1.97559C3.59941 1.73347 3.81999 1.70667 4.11527 1.87804C4.3174 1.99536 4.51426 2.12279 4.7199 2.23352C4.76955 2.26033 4.8592 2.26472 4.90533 2.23748C5.59916 1.82619 6.33342 1.51772 7.116 1.32087C7.16742 1.30812 7.22674 1.23958 7.24256 1.18509C7.30363 0.978127 7.35636 0.76765 7.39679 0.555415C7.44644 0.287814 7.5787 0.0944732 7.84059 0Z" fill="#7D889E" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75764 18C1.64032 18 1.52344 18 1.40611 18C1.37931 17.9903 1.35338 17.9767 1.3257 17.9718C0.931546 17.9007 0.606825 17.7148 0.350648 17.4028C0.155111 17.1651 0.0694268 16.8839 0 16.5934C0 16.4761 0 16.3592 0 16.2419C0.0742603 15.733 0.380965 15.3701 0.732053 15.0216C2.29504 13.4701 3.84835 11.9093 5.40826 10.3547C5.4935 10.2699 5.5124 10.1991 5.4834 10.0809C5.41529 9.80365 5.33531 9.52199 5.32301 9.23944C5.26237 7.86102 5.78308 6.74535 6.92071 5.95441C7.84215 5.31331 8.86905 5.16875 9.95439 5.43196C10.1978 5.49084 10.3762 5.69604 10.3464 5.92585C10.327 6.07613 10.2488 6.24223 10.146 6.3534C9.74831 6.7827 9.31505 7.17949 8.92398 7.61407C8.60673 7.96691 8.62342 8.5298 8.91563 8.89583C9.32736 9.41213 10.0273 9.4486 10.5195 8.97053C10.9101 8.59088 11.2867 8.19716 11.6778 7.81839C12.0025 7.50377 12.4762 7.64087 12.5777 8.07545C12.699 8.59351 12.7258 9.11509 12.6295 9.64282C12.1862 12.0684 9.91924 13.123 7.92124 12.5232C7.80568 12.4884 7.73405 12.5043 7.64749 12.5908C6.09769 14.1468 4.54043 15.6957 2.9937 17.2552C2.63998 17.6115 2.26867 17.9156 1.75764 18Z" fill="#7D889E" />
            </svg>
        ),
        supportIcon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM15.714 6.408L13.212 7.443C12.753 6.219 11.79 5.247 10.557 4.797L11.592 2.295C13.482 3.015 14.985 4.518 15.714 6.408ZM9 11.7C7.506 11.7 6.3 10.494 6.3 9C6.3 7.506 7.506 6.3 9 6.3C10.494 6.3 11.7 7.506 11.7 9C11.7 10.494 10.494 11.7 9 11.7ZM6.417 2.286L7.47 4.788C6.228 5.238 5.247 6.219 4.788 7.461L2.286 6.417C3.015 4.518 4.518 3.015 6.417 2.286ZM2.286 11.583L4.788 10.548C5.247 11.79 6.219 12.762 7.461 13.212L6.408 15.714C4.518 14.985 3.015 13.482 2.286 11.583ZM11.592 15.714L10.557 13.212C11.79 12.753 12.762 11.781 13.212 10.539L15.714 11.592C14.985 13.482 13.482 14.985 11.592 15.714Z" fill="#7D889E" />
            </svg>
        ),
        logoutIcon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8333 10L12.5 6.66667M15.8333 10L12.5 13.3333M15.8333 10H7.49996M11.6666 17.5C10.6817 17.5 9.70644 17.306 8.7965 16.9291C7.88656 16.5522 7.05976 15.9997 6.36333 15.3033C5.66689 14.6069 5.11444 13.7801 4.73753 12.8701C4.36062 11.9602 4.16663 10.9849 4.16663 10C4.16663 9.01509 4.36062 8.03982 4.73753 7.12987C5.11444 6.21993 5.66689 5.39314 6.36333 4.6967C7.05976 4.00026 7.88656 3.44781 8.7965 3.0709C9.70644 2.69399 10.6817 2.5 11.6666 2.5" stroke="#FB5656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        calendarIcon: (
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.67115 0H5.33503C5.70496 0 6.00291 0.3 6.00291 0.668V2H16.0011V0.668C16.0011 0.298 16.301 0 16.669 0H17.3328C17.7028 0 18.0007 0.3 18.0007 0.668V2H21.0002C21.2654 2 21.5197 2.10536 21.7072 2.29289C21.8947 2.48043 22 2.73478 22 3V23C22 23.2652 21.8947 23.5196 21.7072 23.7071C21.5197 23.8946 21.2654 24 21.0002 24H1.00382C0.872183 24.0005 0.74174 23.975 0.619975 23.925C0.498209 23.875 0.387518 23.8014 0.294252 23.7085C0.200987 23.6156 0.126982 23.5052 0.076487 23.3836C0.0259915 23.262 -1.05305e-06 23.1317 0 23V3C-1.05305e-06 2.86834 0.0259915 2.73798 0.076487 2.61639C0.126982 2.4948 0.200987 2.38439 0.294252 2.29147C0.387518 2.19856 0.498209 2.12499 0.619975 2.07497C0.74174 2.02495 0.872183 1.99947 1.00382 2H4.00327V0.668C4.00327 0.298 4.30322 0 4.67115 0ZM2.00364 4V6H20.0004V4H2.00364ZM2.00364 8V22H20.0004V8H2.00364ZM4.00327 10H6.00291V12H4.00327V10ZM8.00254 10H10.0022V12H8.00254V10ZM12.0018 10H14.0015V12H12.0018V10ZM16.0011 10H18.0007V12H16.0011V10ZM4.00327 14H6.00291V16H4.00327V14ZM8.00254 14H10.0022V16H8.00254V14ZM12.0018 14H14.0015V16H12.0018V14ZM16.0011 14H18.0007V16H16.0011V14ZM4.00327 18H6.00291V20H4.00327V18ZM8.00254 18H10.0022V20H8.00254V18ZM12.0018 18H14.0015V20H12.0018V18Z" fill="#7D889E" />
            </svg>
        ),
        bellIcon: (
            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1695 1.26318C8.70229 1.44232 8.91985 1.81971 8.88266 2.3705C8.86679 2.60571 8.88006 2.84282 8.88006 3.0714C9.2764 3.17983 9.66635 3.26345 10.0407 3.39248C12.4977 4.23977 14.1833 6.57065 14.2049 9.16676C14.22 10.972 14.2127 12.7774 14.206 14.5827C14.2045 15.0033 14.3395 15.3013 14.7227 15.5291C15.7445 16.1365 16.2041 17.3608 15.8835 18.5096C15.5703 19.6322 14.526 20.4429 13.3522 20.4448C9.77857 20.4507 6.20501 20.4507 2.63138 20.4448C1.45182 20.4429 0.394009 19.6149 0.0941298 18.488C-0.217297 17.3178 0.25923 16.1135 1.29868 15.5055C1.64149 15.3048 1.77645 15.027 1.77592 14.6489C1.77349 12.8584 1.771 11.0678 1.77586 9.27732C1.78273 6.7091 3.29912 4.45912 5.67305 3.4912C5.89808 3.39941 6.13199 3.32681 6.36614 3.26084C6.59969 3.19517 6.83881 3.14904 7.10387 3.08781C7.10387 2.85324 7.1172 2.61081 7.10121 2.37038C7.06444 1.81977 7.28082 1.44173 7.81443 1.26324C7.93263 1.26318 8.05107 1.26318 8.1695 1.26318ZM7.96935 18.6711C9.73795 18.6711 11.5066 18.6721 13.2753 18.6704C13.7237 18.6699 14.0574 18.4238 14.1727 18.0196C14.2847 17.627 14.1335 17.2344 13.7549 17.0152C12.8308 16.4798 12.4325 15.6615 12.4326 14.6194C12.4328 12.8655 12.437 11.1117 12.4288 9.35786C12.4272 9.03429 12.3994 8.70634 12.3413 8.38817C11.9128 6.0429 9.5324 4.42844 7.19815 4.89016C5.02823 5.31937 3.55477 7.1042 3.55157 9.31285C3.54896 11.1185 3.56187 12.9243 3.54648 14.7298C3.53807 15.7082 3.13154 16.4838 2.26654 16.9917C2.15409 17.0577 2.04323 17.1441 1.96429 17.2463C1.74767 17.527 1.70776 17.8421 1.86516 18.1639C2.02985 18.5007 2.31155 18.6696 2.68557 18.6701C4.44683 18.672 6.20809 18.6709 7.96935 18.6711Z" fill="#7D889E" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03677 24C5.97631 23.9738 5.91555 23.9483 5.8555 23.9212C5.4813 23.7526 5.2651 23.3507 5.33806 22.9601C5.41492 22.5484 5.75453 22.2312 6.1703 22.2281C7.38374 22.219 8.59729 22.2191 9.81067 22.2281C10.2263 22.2312 10.5655 22.5479 10.6429 22.96C10.7162 23.3504 10.5003 23.7522 10.1258 23.9212C10.0658 23.9483 10.0051 23.9738 9.94468 24C8.64206 24 7.33944 24 6.03677 24Z" fill="#7D889E" />
                <circle cx="15.1579" cy="5.05263" r="5.05263" fill="url(#paint0_linear_900_148)" />
                <defs>
                    <linearGradient id="paint0_linear_900_148" x1="10.927" y1="0.785965" x2="20.3192" y2="1.3089" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3B5998" />
                        <stop offset="1" stop-color="#6BF3AA" />
                        <stop offset="1" stop-color="#3EFE97" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        graySettingIcon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8848 24C12.3848 24 10.8848 24 9.38475 24C9.35687 23.9871 9.33018 23.9692 9.30087 23.9622C8.4547 23.759 7.93513 23.1992 7.79561 22.3408C7.73429 21.9635 7.67141 21.5864 7.60709 21.2095C7.44563 20.2639 6.58427 19.7618 5.67959 20.0883C5.2836 20.2313 4.8933 20.3904 4.49557 20.5281C3.60645 20.8361 2.70352 20.5128 2.22871 19.7038C1.56525 18.5731 0.909733 17.4377 0.262463 16.2978C-0.208597 15.4682 -0.033825 14.5287 0.69233 13.9079C1.01281 13.6339 1.34541 13.374 1.66627 13.1004C2.38117 12.4908 2.38105 11.508 1.66652 10.8997C1.35729 10.6365 1.03819 10.3851 0.72821 10.1227C-0.0443885 9.46889 -0.21466 8.53665 0.285778 7.6616C0.921109 6.55077 1.56069 5.44226 2.20527 4.33674C2.71121 3.46907 3.61927 3.14809 4.56114 3.49413C4.94906 3.63665 5.33205 3.79311 5.7226 3.92781C6.59114 4.22735 7.44669 3.71791 7.60409 2.81367C7.67097 2.42937 7.73335 2.04426 7.79574 1.65921C7.93482 0.800852 8.45382 0.241281 9.30037 0.0375672C9.32975 0.0305038 9.35656 0.0128141 9.38463 0C10.8846 0 12.3846 0 13.8846 0C13.9126 0.0127516 13.9394 0.0305658 13.9688 0.0376292C14.8138 0.240155 15.3338 0.800727 15.4735 1.65915C15.5348 2.03651 15.5974 2.41362 15.6621 2.79042C15.8246 3.73635 16.6844 4.23735 17.5902 3.91112C17.9789 3.77111 18.3622 3.61559 18.7514 3.47713C19.6464 3.15878 20.5601 3.47863 21.0406 4.29617C21.7048 5.42632 22.3598 6.56196 23.0067 7.70211C23.4773 8.53152 23.3025 9.46971 22.5764 10.0925C22.2564 10.367 21.9234 10.6264 21.6026 10.9001C20.8872 11.5108 20.8874 12.4883 21.603 13.1002C21.9117 13.3641 22.2313 13.6149 22.5414 13.8773C23.3134 14.5303 23.4838 15.4639 22.9835 16.3388C22.3482 17.4496 21.7086 18.5582 21.0639 19.6635C20.5581 20.5304 19.6495 20.851 18.7072 20.5054C18.3192 20.3632 17.9362 20.207 17.5457 20.072C16.6772 19.772 15.8205 20.2823 15.665 21.1862C15.5988 21.5706 15.5362 21.9557 15.4735 22.3407C15.3333 23.1996 14.8134 23.7596 13.9685 23.9621C13.9392 23.9691 13.9126 23.9871 13.8848 24ZM13.6057 22.1179C13.6693 21.738 13.7362 21.3697 13.7919 20.9997C14.0895 19.0211 15.8739 17.7532 17.7824 18.1976C18.2878 18.3153 18.7709 18.5314 19.2601 18.7134C19.3805 18.7583 19.4418 18.7432 19.5019 18.6305C19.6156 18.4172 19.7413 18.2102 19.8622 18.0007C20.3687 17.1226 20.8752 16.2444 21.3878 15.3558C21.0733 15.0962 20.7675 14.8426 20.4604 14.5904C18.7663 13.1989 18.7667 10.7995 20.4612 9.40895C20.7683 9.15698 21.0741 8.90332 21.3887 8.64348C20.7505 7.5384 20.1202 6.44351 19.4817 5.35337C19.4544 5.30693 19.3393 5.27017 19.285 5.2883C18.9596 5.39663 18.6389 5.51908 18.319 5.64309C17.7161 5.87694 17.0975 5.96451 16.4589 5.83756C15.02 5.55133 14.0145 4.47601 13.7916 2.99857C13.7352 2.62458 13.6665 2.25229 13.6054 1.88993C12.2717 1.88993 10.9711 1.88993 9.66129 1.88993C9.59803 2.27204 9.53296 2.64059 9.47645 3.01045C9.17479 4.98551 7.37999 6.25061 5.47563 5.80061C4.99319 5.6866 4.53132 5.48107 4.06582 5.30236C3.90355 5.24004 3.82592 5.26361 3.73747 5.41963C3.15627 6.44445 2.56332 7.46258 1.97481 8.48321C1.94474 8.5354 1.92011 8.59072 1.89005 8.65035C2.18702 8.89557 2.47525 9.1346 2.76447 9.37232C4.52138 10.8163 4.52044 13.1836 2.76259 14.6292C2.46949 14.8701 2.17789 15.1131 1.88279 15.3575C2.52231 16.4657 3.15121 17.5527 3.77585 18.6423C3.83542 18.7461 3.89224 18.7588 4.00081 18.7159C4.35611 18.5756 4.71541 18.4453 5.07445 18.3148C7.01007 17.6107 9.06021 18.781 9.43901 20.8076C9.52027 21.2423 9.59078 21.679 9.66673 22.1179C10.983 22.1179 12.2782 22.1179 13.6057 22.1179Z" fill="#7D889E" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.481 16.6241C8.88345 16.4903 6.88713 14.3363 7.00709 11.8292C7.13048 9.25013 9.27169 7.27275 11.7979 7.38227C14.3878 7.49447 16.3744 9.65943 16.2606 12.1584C16.1438 14.724 14.0277 16.6973 11.481 16.6241ZM14.3868 12.0065C14.3924 10.5077 13.1587 9.26245 11.6524 9.24663C10.1487 9.23082 8.88639 10.4817 8.88108 11.9929C8.87576 13.491 10.1103 14.7373 11.6154 14.7533C13.1183 14.7691 14.381 13.5177 14.3868 12.0065Z" fill="#7D889E" />
            </svg>
        ),
        tickIcon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_900_136)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4111 11.9644C23.0695 11.6024 22.849 11.1435 22.78 10.651C22.711 10.1586 22.797 9.65698 23.0261 9.2154C23.1932 8.89426 23.2855 8.53959 23.2959 8.17789C23.3063 7.81618 23.2346 7.45681 23.0862 7.12663C22.939 6.79996 22.7178 6.51179 22.4402 6.28475C22.1625 6.05772 21.8358 5.898 21.4858 5.81815C20.9993 5.70652 20.5615 5.44226 20.2366 5.06417C19.9118 4.68607 19.7169 4.21405 19.6808 3.71738C19.6484 3.35814 19.5353 3.01078 19.3499 2.70113C19.1645 2.39147 18.9115 2.12747 18.6098 1.92873C18.3082 1.73367 17.9652 1.61148 17.608 1.57188C17.2507 1.53229 16.8892 1.57638 16.5521 1.70065C16.0852 1.8702 15.5761 1.88591 15.0996 1.74546C14.623 1.60501 14.2043 1.31582 13.9047 0.92036C13.6882 0.634438 13.4082 0.402512 13.0866 0.242814C12.765 0.083116 12.4107 0 12.0515 0C11.6923 0 11.338 0.083116 11.0165 0.242814C10.6949 0.402512 10.4149 0.634438 10.1984 0.92036C9.89884 1.31582 9.48004 1.60501 9.00353 1.74546C8.52703 1.88591 8.01793 1.8702 7.55103 1.70065C7.2139 1.57638 6.85235 1.53229 6.49513 1.57188C6.13791 1.61148 5.79488 1.73367 5.49331 1.92873C5.19603 2.12373 4.94579 2.38206 4.76061 2.68512C4.57542 2.98818 4.45989 3.32843 4.42234 3.68137C4.38615 4.17804 4.19133 4.65006 3.86646 5.02815C3.5416 5.40625 3.1038 5.67051 2.61732 5.78214C2.26731 5.86199 1.94063 6.0217 1.66294 6.24874C1.38524 6.47577 1.1641 6.76395 1.01687 7.09062C0.859151 7.41629 0.777234 7.77331 0.777234 8.135C0.777234 8.49669 0.859151 8.85371 1.01687 9.17938C1.26204 9.61903 1.36258 10.1244 1.30428 10.6241C1.24598 11.1238 1.03179 11.5927 0.691964 11.9644C0.438047 12.213 0.245124 12.5168 0.128236 12.8521C0.0113482 13.1873 -0.0263466 13.5449 0.0180904 13.8971C0.0823313 14.2468 0.223602 14.5778 0.431703 14.8664C0.639803 15.1549 0.90954 15.3938 1.22144 15.5657C1.66268 15.809 2.0162 16.1843 2.23211 16.6388C2.44802 17.0933 2.51541 17.6039 2.42478 18.0986C2.35045 18.4481 2.3577 18.8099 2.44597 19.1561C2.53423 19.5023 2.70115 19.8236 2.93381 20.0952C3.16646 20.3667 3.45862 20.5812 3.78768 20.7221C4.11674 20.863 4.47388 20.9265 4.83147 20.9077C5.3273 20.9011 5.81305 21.0475 6.2223 21.3269C6.63155 21.6062 6.94432 22.0048 7.11783 22.4682C7.24479 22.8027 7.44763 23.1032 7.71045 23.3464C7.97328 23.5895 8.28896 23.7687 8.63278 23.8699C8.9766 23.971 9.33922 23.9914 9.69226 23.9294C10.0453 23.8675 10.3792 23.7248 10.6677 23.5126C11.073 23.2285 11.5562 23.076 12.0515 23.076C12.5469 23.076 13.0301 23.2285 13.4354 23.5126C13.7249 23.737 14.0636 23.8899 14.4237 23.9587C14.7838 24.0274 15.1551 24.0102 15.5072 23.9083C15.8594 23.8064 16.1823 23.6228 16.4497 23.3726C16.717 23.1223 16.9212 22.8124 17.0454 22.4682C17.223 22.0234 17.5299 21.6417 17.9266 21.3722C18.3232 21.1027 18.7917 20.9576 19.2716 20.9557C19.6292 20.9745 19.9863 20.911 20.3154 20.7701C20.6445 20.6293 20.9366 20.4147 21.1693 20.1432C21.4019 19.8716 21.5689 19.5503 21.6571 19.2041C21.7454 18.8579 21.7526 18.4961 21.6783 18.1467C21.5767 17.6447 21.6387 17.1234 21.8552 16.6591C22.0717 16.1948 22.4314 15.8117 22.8817 15.5657C23.1742 15.3807 23.4234 15.1349 23.612 14.8451C23.8006 14.5552 23.9242 14.2281 23.9745 13.8862C24.0248 13.5443 24.0005 13.1956 23.9032 12.8639C23.806 12.5322 23.6381 12.2254 23.4111 11.9644Z" fill="url(#paint0_linear_900_136)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.176 16.224L10.788 16.8L11.4 16.212L18 9.74402L16.764 8.40002L10.788 14.268L7.212 10.956L6 12.324L10.176 16.224Z" fill="white" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_900_136" x1="1.95181" y1="1.86667" x2="24.2582" y2="3.10863" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3B5998" />
                        <stop offset="1" stop-color="#6BF3AA" />
                        <stop offset="1" stop-color="#3EFE97" />
                    </linearGradient>
                    <clipPath id="clip0_900_136">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        dotIcon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8.8 12H7.2V10.4H8.8V12ZM8.8 8.8H7.2V4H8.8V8.8Z" fill="#7D889E" />
            </svg>
        )
    };
    return (
        <span className={`grid ${props.className || ''}`}>
            {props.iconName && IconList[props.iconName]}
        </span>
    );
};

export default Icon;