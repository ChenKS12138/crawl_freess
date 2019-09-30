import { base642string } from '../../utils/parser';

export const COMMON_PREREG1 = base642string;

export const COMMON_PREREG2 = (raw: String) => base642string(raw) + '\r\n';