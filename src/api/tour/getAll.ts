import api from "../api";
export interface GetToursPropsType {
    from: string;
    page: number;
    page_size: number;
    night_count: string;
    to: string,
    with_delete: string,
    starts: string
}

export const getTours = async ({
    from = '',
    page_size = 15,
    page = 1,
    night_count = '',
    to = '',
    with_delete = '',
    starts = '',
  }: Partial<GetToursPropsType>) => {

    const params = new URLSearchParams();

    if (from) params.append('from', from);
    params.append('page', String(page));
    params.append('page_size', String(page_size));
    if (night_count) params.append('night_count', night_count);
    if (to) params.append('to', to);
    if (with_delete) params.append('with_delete', with_delete);
    if (starts) params.append('starts', starts);

    return await api.get(`/api/tour?${params.toString()}`);
}

// export const getTours = async ({
//     from,
//     page_size,
//     page,
//     night_count,
//     to,
//     with_delete,
//     starts,
//   }: GetToursPropsType) => {
//     return await api.get(`/api/tour?from=${from}&page=${page}&page_size=${page_size}&night_count=${night_count}&to=${to}&with_delete=${with_delete}&starts=${starts}`);
// }
