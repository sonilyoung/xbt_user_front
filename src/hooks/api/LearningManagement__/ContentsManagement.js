import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const contentsManagement = createApi({
    reducerPath: 'contentsManagement',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
        prepareHeaders: (headers) => {
            const jwtToken = localStorage.getItem('userToken');
            if (jwtToken) {
                headers.set('authorization', `Bearer ${jwtToken}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        // 콘텐츠 관리 > 언어 관리
        getLanguageList: builder.mutation({
            query: (body) => ({
                url: 'contents/getLanguageList.do',
                method: 'POST',
                body: body
            })
        }),

        // 콘텐츠 관리 > 그룹 관리
        getGroupList: builder.mutation({
            query: (body) => ({
                url: 'contents/getGroupList.do',
                method: 'POST',
                body: body
            })
        }),

        // 콘텐츠 관리 > 정보 관리
        getInformationList: builder.mutation({
            query: (body) => ({
                url: 'contents/getInformationList.do',
                method: 'POST',
                body: body
            })
        }),

        // X-ray 콘텐츠 관리 > 정보 관리(상단)
        getXrayinformationList: builder.mutation({
            query: (body) => ({
                url: 'contents/getXrayInformationList.do',
                method: 'POST',
                body: body
            })
        }),

        // X-ray 콘텐츠 관리 > 정보 관리(하단)
        getXrayinformationSubList: builder.mutation({
            query: (body) => ({
                url: 'contents/getXrayDetailList.do',
                method: 'POST',
                body: body
            })
        })
    })
});

export const {
    useGetLanguageListMutation,
    useGetGroupListMutation,
    useGetInformationListMutation,
    useGetXrayinformationListMutation,
    useGetXrayinformationSubListMutation
} = contentsManagement;
