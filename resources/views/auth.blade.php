@extends('abstract.body')

@section('title')
    @lang('title-authentication')
@endsection

{{-- Content --}}
@section('content')
    <div
        id="auth-info"
        data-access-token="{{$instance_uri}}"
        data-instance-uri="{{$access_token}}"
    >
    </div>
@stop
