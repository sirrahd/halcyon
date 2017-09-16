@extends('abstract.body')

{{-- Title text --}}
@section('title')
    @lang('title-local')
@stop

{{-- Dashborad left --}}
@section('dashboard-left-collection')
    @include('widgets.profile-card')
@endsection

{{-- Dashborad right --}}
@section('dashboard-right-collection')
    @include('widgets.footer')
@endsection

{{-- Content --}}
@section('content')
    @include('headers.header')

    <main id="main" class="main main--home">
        <article class="page-container page-container--home page-container--flexbox">
            @include('components.dashboard-left')
            @include('components.timeline')
            @include('components.dashboard-right')
        </article>
    </main>

    @include('footers.footer')
@stop
