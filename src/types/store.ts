import { CartSlice } from '@/stores/cart-slice';
import { UserSlice } from '@/stores/user-slice';

export type Store = UserSlice & CartSlice;